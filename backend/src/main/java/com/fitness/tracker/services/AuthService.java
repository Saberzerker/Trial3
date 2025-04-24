    package com.fitness.tracker.services;

    import com.fitness.tracker.models.User;
    import com.fitness.tracker.repositories.UserRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.security.authentication.BadCredentialsException;
    import org.springframework.stereotype.Service;

    @Service
    public class AuthService {
        
        @Autowired
        private UserRepository userRepository;

        public User authenticate(String username, String password) {
            User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new BadCredentialsException("Invalid username or password"));
            
            // Simple password check
            if (!user.getPassword().equals(password)) {
                throw new BadCredentialsException("Invalid username or password");
            }
            
            return user;
        }

        public User register(User user) {
            // Check if username already exists
            if (userRepository.findByUsername(user.getUsername()).isPresent()) {
                throw new IllegalArgumentException("Username already exists");
            }
            
            // Check if email already exists
            if (userRepository.findByEmail(user.getEmail()).isPresent()) {
                throw new IllegalArgumentException("Email already exists");
            }
            
            // Save user
            return userRepository.save(user);
        }
    }