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
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
