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
) ENGINE = InnoDB AUTO_INCREMENT = 52 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
    42,
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
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
    51,
    'Question title',
    'multi',
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
