// class는 속성{변수}과 행동 {함수}
class Employee {
  #name;
  #age;
  #gender;
  #position;
  constructor(name, age, gender, position) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
    this.#position = position;
  }

  introduce() {
    console.log(`안녕하세여.${this.#position} ${this.#name} 입니다`);
  }
}
class President extends Employee {
  meet() {}
  observe() {}
}

class Mento extends Employee {
  #students;
  constructor(name, age, gender, position) {
    super(name, age, gender, position);
    this.#students = [];
  }
  counsel() {}
  manage() {
    console.log("담당 학생 리스트");
  }
}
