const { createClient } = require('@supabase/supabase-js');

// Supabase connection
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Register controller
const registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  // Validate input
  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Email, password, and name are required' });
  }

  try {
    // Register the user with a default role of 'user'
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role: 'user', // Default role
        },
      },
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Automatically sign in after registration
    const { user, session, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      return res.status(400).json({ error: loginError.message });
    }

    // Return success response
    res.status(200).json({
      message: 'User registered and logged in successfully',
      user,
      session,
    });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Return success response
    res.status(200).json({ message: 'User logged in successfully', data });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Assign a new role to a user (e.g., upgrade to 'eventmanager' or 'admin')
const assignRoleToUser = async (req, res) => {
  const { userId, role } = req.body;

  // Validate input
  if (!userId || !role) {
    return res.status(400).json({ error: 'User ID and role are required' });
  }

  try {
    // Update the user's role using the Supabase Admin API
    const { data, error } = await supabase.auth.admin.updateUserById(userId, {
      user_metadata: { role }, // Update the role
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Return success response
    res.status(200).json({
      message: 'User role updated successfully',
      user: data.user,
    });
  } catch (err) {
    console.error('Error during role assignment:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { registerUser, loginUser, assignRoleToUser };