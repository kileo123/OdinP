export class TODO{
  constructor(category, title, description, duedate, priority) {
    this.category = category
    this.title = title
    this.description = description
    this.duedate = duedate
    this.priority = priority
    this.complete = false
  }

  completed() {
    this.complete = !this.complete
  }
}
