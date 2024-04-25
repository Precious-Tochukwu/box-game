document.addEventListener('DOMContentLoaded', function () {
    let gameActive = true;
    const antBoy = document.getElementById('antBoy');
    const enemies = document.querySelectorAll('.enemy');
    let num = 10;

    const collisionSound = new Audio('biodynamic-impact-braam-tonal-dark-176441.mp3');
    const backgroundAudio = new Audio('horror-background-atmosphere-156462.mp3');

    function playCollisionSound() {
        collisionSound.play();
    }

    function playBackgroundAudio() {
        backgroundAudio.loop = true;
        backgroundAudio.play(); // Autoplay the background audio
    }

    function checkCollision() {
        if (!gameActive) return;

        const antBoyRect = antBoy.getBoundingClientRect();

        enemies.forEach((enemy) => {
            const enemyRect = enemy.getBoundingClientRect();

            if (
                antBoyRect.top < enemyRect.bottom &&
                antBoyRect.bottom > enemyRect.top &&
                antBoyRect.left < enemyRect.right &&
                antBoyRect.right > enemyRect.left
            ) {
                gameActive = false;
                document.getElementById("active").style.display = 'block';
                antBoy.style.display = 'none';
                playCollisionSound();
                backgroundAudio.pause();

                // enemies.forEach((enemy) => {
                //     enemy.classList.add('stop');
                //     console.log('Added stop class to enemy');
                // });
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (!gameActive) return;

        switch (e.key) {
            case "ArrowRight":
                num += 20;
                antBoy.style.left = num + "px";
                break;
            case "ArrowLeft":
                num -= 20;
                antBoy.style.left = num + "px";
                break;
        }

        if (num <= 0) {
            num = 0;
            antBoy.style.left = num + "px";
        } else if (num >= 1835) {
            num = 1835;
            antBoy.style.left = num + "px";
        }
        checkCollision();
    });

    // enemies.forEach((enemy) => {
    //     function animateEnemy(){
    //         num += 1;
    //         enemy.style.to = num + "px";
    //         checkCollision();
    //         requestAnimationFrame(animateEnemy);
    //     }
    //     animateEnemy()
    // })
    
        

    playBackgroundAudio();

});





// document.addEventListener('DOMContentLoaded', function () {
//     let gameActive = true;
//     const antBoy = document.getElementById('antBoy');
//     const enemies = document.querySelectorAll('#enemy');
//     let num = 10;
//     const collisionSound = new Audio('biodynamic-impact-braam-tonal-dark-176441.mp3');

//     function playCollisionSound() {
//         collisionSound.play();
//     }

//     function showActiveBlock() {
//         document.getElementById('active').style.display = 'block';
//     }

//     function checkCollision() {
//         if (!gameActive) return;

//         const antBoyRect = antBoy.getBoundingClientRect();

//         enemies.forEach((enemy) => {
//             const enemyRect = enemy.getBoundingClientRect();

//             if (
//                 antBoyRect.top < enemyRect.bottom &&
//                 antBoyRect.bottom > enemyRect.top &&
//                 antBoyRect.left < enemyRect.right &&
//                 antBoyRect.right > enemyRect.left
//             ) {
//                 gameActive = false;
//                 antBoy.style.display = 'none';
//                 playCollisionSound();
//                 showActiveBlock();
//             }
//         });
//     }

//     function moveAntBoy() {
//         if (!gameActive) return;
//         // Your existing antboy movement code here
//         checkCollision();
//     }

//     // Use setInterval to continuously check for collisions and move antboy
//     setInterval(moveAntBoy, 100); // Adjust the interval as needed

//     // Add the new code for handling key events
//     document.addEventListener('keydown', (e) => {
//         if (!gameActive) return; // Check if the game is still active


//         switch (e.key) {
//             case 'ArrowRight':
//                 num += 20;
//                 antBoy.style.left = num + 'px';
//                 break;
//             case 'ArrowLeft':
//                 num -= 20;
//                 antBoy.style.left = num + 'px';
//                 break;
//         }

//         if (num <= 0) {
//             num = 0;
//             antBoy.style.left = num + 'px';
//         } else if (num >= 1835) {
//             num = 1835;
//             antBoy.style.left = num + 'px';
//         }

//         checkCollision();
//         console.log(num);
//     });
// });





















// const antBoy = document.getElementById('antBoy');
// const enemies = document.querySelectorAll('#enemy');
// let num = 0;

// function checkCollision(element1, element2) {
//     const rect1 = element1.getBoundingClientRect();
//     const rect2 = element2.getBoundingClientRect();

//     return !(
//         rect1.right < rect2.left ||
//         rect1.left > rect2.right ||
//         rect1.bottom < rect2.top ||
//         rect1.top > rect2.bottom
//     );
// }

// function handleCollision() {
//     enemies.forEach((enemy) => {
//         if (checkCollision(antBoy, enemy)) {
//             let enemyValue = Number(enemy.textContent);
//             let antBoyValue = Number(antBoy.textContent);
//             antBoyValue += enemyValue;
//             antBoy.textContent = antBoyValue;
//             enemy.remove();
//         }
//     });
// }

// function displayMissedAlert() {
//     alert("Oops! You missed an enemy!");
// }

// function gameLoop() {
//     handleCollision();
    
//     if (enemies.length === 0) {
//         displayMissedAlert();
//     } else {
//         requestAnimationFrame(gameLoop);
//     }
// }

// // Initial call to start the game loop
// gameLoop();

// window.addEventListener("keydown", (e) => {
//     switch (e.key) {
//         case "ArrowRight":
//             num += 20;
//             antBoy.style.left = num + "px";
//             break;
//         case "ArrowLeft":
//             num -= 20;
//             antBoy.style.left = num + "px";
//             break;
//     }

//     if (num <= 0) {
//         num = 0;
//         antBoy.style.left = num + "px";
//     } else if (num >= 1376) {
//         num = 1375;
//         antBoy.style.left = num + "px";
//     }
// });














// const antBoy = document.getElementById('antBoy');
// const enemies = document.querySelectorAll('#enemy');
// let num = 0;

// window.addEventListener("keydown", (e) => {
//     switch (e.key) {
//         case "ArrowRight":
//             num += 20;
//             antBoy.style.left = num + "px";
//             break;
//         case "ArrowLeft":
//             num -= 20;
//             antBoy.style.left = num + "px";
//             break;
//     }

//     if(num <= 0){
//         num = 0;
//         antBoy.style.left = num + "px";
//     }else if(num >= 1376){
//         num = 1375;
//         antBoy.style.left = num + "px";
//     }

// console.log(num)
// });

// enemies.forEach((enemy) => {
//     enemy.addEventListener('click', () => {
//         // Get the value from the clicked enemy div
//         let enemyValue = Number(enemy.textContent);

//         // Update the antBoy value by adding the enemy value
//         let antBoyValue = Number(antBoy.textContent);
//         antBoyValue += enemyValue;

//         // Update the antBoy element's text content
//         antBoy.textContent = antBoyValue;
//     });
// });



































// const enemy = document.querySelectorAll('#enemy');
// const antBoy = document.getElementById('antBoy');


// enemy.forEach((e)=>{
//     e.style.cursor = 'pointer';
//     e.addEventListener('click',  ()=>{
//         startGame(e);
//     })
// });

// function startGame(e){
//     let antNumber = Number(e.textContent);
//     let boy = Number(antBoy.textContent)
//     boy.textContent = antNumber.textContent;
// };

// // function moveAnt(e){


// //     console.log(antBoy.style.top)
// // }

// function checkWinner(){

// }