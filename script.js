const dropTarget = document.getElementById('drop-target');
const draggableItem = document.getElementById('draggable-item');

draggableItem.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'circle'); 
});

dropTarget.addEventListener('dragover', (e) => {
    e.preventDefault(); 
});

 

// let a = 1;
dropTarget.addEventListener('drop', (e) => {
  // e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  // a=a+1;
  // console.log(a)

  
  //  var Main= document.querySelector('.main')
  //  const currentWidth = Main.offsetWidth;
  if (data === 'circle') {
    //   const newone= currentWidth - 10;
    //   Main.style.width=`${newone}px`;
    //   Main.style.height = `${newone}px`;
    // e.target.append(newone)
    
    const parentCircle = e.target;
    const parentWidth = parentCircle.offsetWidth;
    const parentHeight = parentCircle.offsetHeight;
    
    //  const newWidth = `${Math.max(parentWidth - 10)}px`;
    //   const newHeight = `${Math.max(parentHeight - 10)}px`;

    const newWidth = Math.max(parentWidth - 20);  
    const newHeight = Math.max(parentHeight - 20);


    const colors = ['#b11111ff', '#778a0aff', '#0b0b8dff', 'orange', 'purple', 'teal','brown','pink'];
    const randomIndex = Math.floor(Math.random() * colors.length); 
    const randomColor = colors[randomIndex];
    // const myElement = document.getElementById('drop-target');
    
    
   const newCircle = document.createElement('div');
    newCircle.classList.add('small-circle');
    newCircle.style.width = `${newWidth}px`;
    newCircle.style.height = `${newHeight}px`;
    newCircle.style.borderRadius = '50%';
    // newCircle.classList.add('main'+a);
    // newCircle.style.background = 'lightblue';
    newCircle.style.backgroundColor = randomColor;
    // newCircle.style.position='sticky';
    newCircle.style.display = "flex";
    newCircle.style.alignItems = "center";
    newCircle.style.justifyContent = "center";
    
    // newCircle.style.width= `${e.clientX * (newCircle.offsetWidth - 9)}px`;
    // newCircle.style.height = `${e.clientY * (newCircle.offsetHeight - 9)}px`;
    parentCircle.appendChild(newCircle);  
  }  
});
