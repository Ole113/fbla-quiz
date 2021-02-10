/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: questions
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `category` text NOT NULL,
  `option_one` text,
  `option_two` text,
  `option_three` text,
  `option_four` text,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 51 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: questions
# ------------------------------------------------------------

INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    1,
    'What are the official colors of FBLA?',
    'multi',
    'Blue and gold',
    'Orange and yellow',
    'Yellow and blue',
    'Gold and red'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    2,
    'The FBLA creed contains how many stanzas?',
    'multi',
    'Seven',
    'Five',
    'Three',
    'Nine'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    3,
    'Who is the founder of FBLA?',
    'multi',
    'Hamden L. Forkner',
    'Conrad N. Hilton',
    'Dr. Edward Miller',
    'Richard Bowen'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    4,
    'When was FBLA founded?',
    'multi',
    '1940',
    '1937',
    '1947',
    '1958'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    5,
    'What date was the first FBLA chapter chartered?',
    'multi',
    'February 3rd, 1942',
    'March 7th, 1947',
    'January 28th, 1958',
    'October 13th, 1937'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    6,
    'What are the three words across the top of the FBLA emblem?',
    'multi',
    'Service, education, progress',
    'Leadership, service, progress',
    'Service, progress, teaching',
    'Teaching, leadership, progress'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    7,
    'In what year was Phi Beta Lambda created?',
    'multi',
    '1958',
    '1940',
    '1937',
    '1947'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    8,
    'Who was the first executive director of FBLA-PBL?',
    'multi',
    'Dr. Edward Miller',
    'Richard Bowen',
    'Lisa Frye Smothers',
    'Kelly Scholl'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    9,
    'Where is the National FBLA-PBL Center located?',
    'multi',
    'Reston, Virginia',
    'Little Rock, Arkansas',
    'Richmond, Virginia',
    'Chicago, Illinois'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    10,
    'What is the name of the national publication for FBLA and FBLA-Middle Level members?',
    'multi',
    'Tomorrow\'s Business Leader',
    'Leading Into the Future Together',
    'Connecting Together',
    'Leading and Connecting Together'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    11,
    'Are the official colors of FBLA blue and gold?',
    'tf',
    'true',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    12,
    'Does the FBLA creed contain five stanzas?',
    'tf',
    'false',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    13,
    'Is the founder of FBLA Conrad N. Hilton?',
    'tf',
    'false',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    14,
    'Was FBLA founded in 1940?',
    'tf',
    'true',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    15,
    'Was the first FBLA charter chartered February 3rd, 1942?',
    'tf',
    'true',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    16,
    'What was the national recognition program that recognized local FBLA chapters who either maintained or increased their local chapter membership over last year\'s total?',
    'multi',
    'Membership Achievement Award',
    'Leadership Achievement Award',
    'Chapter Achievement Award',
    'Chapter Membership Achievement Award'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    17,
    'When is FBLA-PBL week?',
    'multi',
    'Second week in February',
    'First week of March',
    'Last week of January',
    'First week of October'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    18,
    'Which officer presides over and conducts meetings according to Parliamentary Procedure?',
    'multi',
    'President',
    'Secretary',
    'Vice President',
    'Treasurer'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    19,
    'When is a local chapter considered inactive?',
    'multi',
    'After failing to pay dues for one year',
    'After not placing for one year at state',
    'Not notifying the state leadership of continuing activity',
    'Signing up for the state competition'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    20,
    'There are how many FBLA goals?',
    'multi',
    'Nine',
    'Eight',
    'Five',
    'Three'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    21,
    'The national dues for FBLA are how much annually?',
    'multi',
    '$6.00',
    '$12.00',
    '$20.00',
    '$35.00'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    22,
    'Excluding the three division presidents, what is the term of office for National Board of Director members?',
    'multi',
    'Three years',
    'One year',
    'Four years',
    'Two years'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    23,
    'Who determines national dues?',
    'multi',
    'National Board of Directors',
    'Secretary',
    'Vice President',
    'President'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    24,
    'Which month is National Education for Business month?',
    'multi',
    'November',
    'January',
    'March',
    'February'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    25,
    'Who needs to approve a new chapter application before it is forwarded to the National office?',
    'multi',
    'State chairman',
    'State president',
    'State vice president',
    'State secretary'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    26,
    'How many administrative regions does National FBLA-PBL have?',
    'multi',
    'Five',
    'Two',
    'Seven',
    'Three'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    28,
    'What year did FBLA gain independent status?',
    'multi',
    '1969',
    '1947',
    '1937',
    '1958'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    29,
    'What year was FBLA-Middle Level division established at the national level?',
    'multi',
    '1994',
    '1999',
    '1985',
    '1976'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    30,
    'What officer should appoint the committee chairman?',
    'multi',
    'President',
    'Vice President',
    'Secretary',
    'Treasurer'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    31,
    'What is the national recognition program that recognizes local chapters who recruit 100% of a single course as chapter members called?',
    'multi',
    '100% Class Participation Award',
    '100% Course Chapters',
    'Full Participation Award',
    '100% Full Course Chapter Participation'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    32,
    'The national recognition award that goes to the local chapter that has the largest chapter member based on the percentage of school enrollment?',
    'multi',
    'Market Share Award',
    'All Students Award',
    'Full Participation Award',
    '100% Participation Award'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    33,
    'What is the national award called that is given to those local chapters that charter or reactivate the most chapters of FBLA-Middle, FBLA, or PBL.',
    'multi',
    'Local Recruitment of Chapters',
    '100% Class Participation Award',
    'Market Share Award',
    'Most Revival Award'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    34,
    'What state became FBLA\'s first state chapter?',
    'multi',
    'Iowa',
    'Arkansas',
    'Virginia',
    'Missouri'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    35,
    'How many local chapters must a state have to be issued a state charter?',
    'multi',
    'Five',
    'Seven',
    'Three',
    'One'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    36,
    'What is the last sentence of the creed?',
    'multi',
    'I promise to use my abilities to make the world a better place for everyone',
    'I will use what I learn to make the world a better place',
    'I promise to use what I learn to make the world a better place',
    'I promise to make the world a better place with my abilities.'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    37,
    'The national program that allows FBLA members to invest a hypothetical $100,000 in NASDAQ, AMEX, and NYSE-listed common stock is called?',
    'multi',
    'Stock Market Game',
    'Stock Exchange Game',
    'Common Stock Game',
    'Stock Market Exchange Game'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    38,
    'In the absence of the president at a chapter meeting, which officer serves as the presiding officer?',
    'multi',
    'Vice-President',
    'President',
    'Secretary',
    'Treasurer'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    39,
    'What is FBLA\'s mission statement?',
    'multi',
    'Our mission is to bring business and education together in a positive working relationship through innovative leadership and career development programs.',
    'Our mission is to bring success to students and communities through career development programs.',
    'Our mission is to help communities and students through continued career development programs.',
    'Our mission is help students have success in their future education and future jobs.'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    40,
    'What is FBLA\'s Fiscal Year?',
    'multi',
    'July 1-June 30',
    'December 31-December 30',
    'January 1-December 20',
    'March 7-January 14'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    41,
    'What are the Five Regions of FBLA?',
    'multi',
    'Western, Mountain Plains, North Central, Southern and Eastern',
    'Western, Mountain Plains, North Central, Southern and Western Mountain',
    'Western, Mountain Plains, North Central, Southern Plains and Eastern',
    'Western, Mountain Plains, North Central, Southern Plains and Eastern Plains'
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    42,
    'Are there 4 FBLA districts in South Carolina?',
    'tf',
    'true',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    43,
    'Is a blue candle represent the chapter in its entirety during the officer installation ceremony?',
    'tf',
    'false',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    44,
    'Is the Director of Education for FBLA-PBL Barbara Small?',
    'tf',
    'true',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    45,
    'Is the national publication for FBLA and FBLA-Middle level advisors called \'Hotline\'?',
    'tf',
    'true',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    46,
    'Does the white candle symbolize the office of the president?',
    'tf',
    'false',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    47,
    'Did FBLA-PBL membership first top 200,000 memebers in 1988?',
    'tf',
    'false',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    48,
    'Is personal development one of the five functional chapter activities?',
    'tf',
    'true',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    49,
    'Is American Enterprise Day observed on November 14th every year?',
    'tf',
    'false',
    '',
    '',
    ''
  );
INSERT INTO
  `questions` (
    `id`,
    `content`,
    `category`,
    `option_one`,
    `option_two`,
    `option_three`,
    `option_four`
  )
VALUES
  (
    50,
    'Does the FBLA-PBL Board of Directors Chairman serve for one year?',
    'tf',
    'true',
    '',
    '',
    ''
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
