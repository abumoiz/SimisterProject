router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkUserExists = await RegisteredUsers.findOne({ Email: email });

        if (!checkUserExists) {
            return res.status(401).json({ message: "User not found" });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, checkUserExists.Password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Create and send JWT token
        const token = jwt.sign({ _id: checkUserExists._id }, "privateKey");
        res.header("auth-token", token).json({ message: "success", token });
    } catch (e) {
        console.error(e, 'while logging user in');
        res.status(500).json({ message: "failed" });
    }
    
});