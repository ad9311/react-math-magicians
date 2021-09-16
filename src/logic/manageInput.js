function* manageInput(keyPressed) {
  while (true) {
    if (!/[AC+/\-%=]/.test(keyPressed)) {
      yield 0;
    } else {
      yield 0;
    }
  }
}

export default manageInput;
