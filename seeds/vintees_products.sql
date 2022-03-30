DROP DATABASE vintees;

CREATE DATABASE vintees;

USE vintees;

CREATE TABLE products(
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(100) NOT NULL,
    Category VARCHAR(30) NOT NULL,
    Price DECIMAL(6,2) NOT NULL,
    Image VARCHAR(100) NOT NULL,
    Description TEXT NOT NULL
    
);

INSERT INTO products
    (productName ,Category, Price, Image, Description)
VALUES
( "Love Mr. Happy Tee","Culture",40,"images/tshirt1.jpeg","The character of Mr. Happy is perhaps the most simple-looking, merely being a bright-yellow circle with a wide smile, similar to the iconic smiley-face."),
( "Grateful Dead Tie Dye Tee","Bands", 45,"images/tshirt2.jpeg","The Grateful Dead was an American rock band formed in 1965 in Palo Alto, California. The band is known for its eclectic style, which fused elements of rock, folk, country, jazz, bluegrass, blues, rock."),
("DefLepard Tie Dye Tee","Bands",45,"images/tshirt3.jpeg","They established themselves as part of the new wave of British heavy metal movement of the early 1980s."),
("Jimmy Hendrix Tee","Musicians",40,"images/tshirt4.jpeg","James Marshall 'Jimi' Hendrix was an American musician, singer, and songwriter. "),
("Tune Squad Tee","Classic Shows", 40, "images/tshirt5.jpeg","the team name for Michael Jordan and the Tunes when they were going to play a basketball match against Monstars in Space Jam."),
("Blondie Tee","Bands",40,"images/tshirt6.jpeg","The band was a pioneer in the American new wave scene of the mid-1970s in New York."),
("Jaws Tee", "Classic Movies", 40, "images/tshirt7.jpeg","Jaws is a 1975 American thriller film directed by Steven Spielberg, based on the 1974 novel by Peter Benchley."),
( "Beatles Tee", "Bands", 45, "images/tshirt8.jpeg","They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form."),
( "Whitney Houston Tee","Musicians",45, "images/tshirt9.jpeg", "Nicknamed 'The Voice', she is one of the best-selling recording artists of all time, with sales of over 200 million records worldwide."),
("Lisa Simpson Tee","Classic Shows",35,"images/tshirt10.jpeg", "Lisa Marie Simpson is a fictional character in the animated television series The Simpsons."),
( "Woodstock Tee", "Culture", 35, "images/tshirt11.jpeg","Woodstock Music and Art Fair, commonly referred to simply as Woodstock, was a music festival held August 15–18, 1969, on Max Yasgur's dairy farm in Bethel, New York, 40 miles southwest of the town of Woodstock."),
( "Rose Distressed Tee", "Bands", 40, "images/tshirt12.jpeg","Rose Distressed tee Band, Music");