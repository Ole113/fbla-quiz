CREATE TABLE questions (
    id           INT PRIMARY KEY AUTO_INCREMENT,
    content      TEXT NOT NULL,
    category     TEXT NOT NULL,
    option_one   TEXT,
    option_two   TEXT,
    option_three TEXT,
    option_four  TEXT
);