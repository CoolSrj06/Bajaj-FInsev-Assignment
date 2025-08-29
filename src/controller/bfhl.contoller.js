const bfhlController = (req, res) => {
    const inputData = req.body.data;

    if (!Array.isArray(inputData)) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid input format"
        });
    }

    const response = {
        is_success: true,
        user_id: "Srijan Maurya",
        email: "srijanmaurya2022@vitbhopal.ac.in",
        roll_number: "22BCE10258",
        even_numbers: [],
        odd_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
    };

    let numericSum = 0;

    inputData.forEach(item => {
        if (!isNaN(item)) {
            // Handle numbers
            if (item % 2 === 0) {
                response.even_numbers.push(item.toString());
            } else {
                response.odd_numbers.push(item.toString());
            }
            numericSum += Number(item);
        } else if (typeof item === "string") {
            // Handle strings
            if (/^[a-zA-Z]+$/.test(item)) {
                response.alphabets.push(item.toUpperCase());
            } else {
                response.special_characters.push(item);
            }
        }
    });

    response.sum = numericSum.toString();
    response.concat_string = response.alphabets.reverse().join("").split("").map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("");

    return res.status(200).json(response);
};

export {
    bfhlController
};