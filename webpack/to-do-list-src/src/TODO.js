export class TODO{
  constructor(category, title, description, duedate, priority, complete) {
    this.category = category
    this.title = title
    this.description = description
    this.duedate = duedate
    this.priority = priority
    this.complete = complete
  }

  completed() {
    this.complete = !this.complete
  }
}
