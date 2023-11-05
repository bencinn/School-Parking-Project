# School Parking Project
The project that manages the parking spaces in schools. This is a test version, and ***NOT THE FINISHED VERSION***! There are both the software and hardware part, so in this repository, there will only be just the software part.

## How To Use It
### 1. Entering The School
When the driver entered the school, they will have to find their spots first. There'll be a QR Code at the front of the school, and when the users have scanned it, it'll bring them to the overview of the remaining spaces. They will be able to see which building has some parking spaces left, how many, and where. For example, they'll get the following informations.
| Building | Spaces Left | Location |
|--------|-----------|--------------|
| 1 | 5 | 1, 4, 5, 8, 9 |
| 3 | 3 | 14, 16, 19 |
| 5 | 0 | - |
| 6 | 2 | 42, 44, 47 |


*Of course, the information will be re-arranged into a UI, and this is just some example data*

After that, the driver could steer right over to their desired spot.

### 2. Registering Your Space
When the driver has parked their car, they'll have to scan the QR Code beside their parking space. The driver will then have to enter their information, such as name, telephone number, and their position (Student, Teacher, Visitor). After they've submitted their information, the spot will be registered into the system, and the spot will officially be claimed, meaning the following drivers will be able to see a clear indication on the overview that the spot has been taken.

### 3. Exiting The Spot
After the driver is ready to leave, they'll have to scan the same QR Code again. This time, just a press of the button, and they'll be out of the system. The space will appear as vacant again, and will be updated onto the overview. The driver then start up their car, and leave their space. 

**Important Note:** Only the driver that registered their space will be the only one that can sign out of the space. If other people scan the QR Code of a spot had been taken, they'll just show the information of the driver, and they can not sign out of the parker's space. The only exception being that only the Administrator of the system could remove driver from the system.


## Notes
This is just a test version of the project with it being only **85-90% Done**, and there's a ton of potential problems out there. Also, this project could be implemented into many other different places as well, such as Office Buildings, Malls, etc. The reason I chose to use it at my school is because this project is dedicated to my computer class. :) Anyway, this just a test project, so feel free to help, or report potential problems to me.

___

**Thanks For Viewing This Project, And Feel Free To Leave Your Thoughts Below :)**
