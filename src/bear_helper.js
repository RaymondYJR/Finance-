function help() {
  const more = document.getElementsByClassName('question-helper')
  console.log(more)
  for (const w of more) {
    // if (w.addEventListener("mouseover", penis)) {
      w.insertAdjacentHTML('beforeend', '?');
    // }
    // else {
    //   console.log('youre a bitch')
    // }

  };
}


// const injectBear = document.getElementsByClassName('question-helper')
// injectBear.addEventListener("mouseover", addQuestion)




