# Student Task Tracker - Git Practice Web Project

This is a small beginner-friendly web project created for Git practice.

## Tools Used

- HTML
- CSS
- JavaScript
- Browser localStorage
- Git and GitHub

## Project Features

- Add a student practice task
- Select topic such as Git, Selenium, TestNG, API Testing, Debugging
- Save task in browser localStorage
- Display saved tasks
- Clear all saved tasks
- Data remains after browser refresh because localStorage is used

## Important Note

This project stores data in browser localStorage, not in a real database and not in a physical local file.
Normal browser JavaScript cannot directly write to local computer files without special browser permission or download logic. For beginner Git practice, localStorage is enough.

## How to Run

1. Extract the ZIP file.
2. Open the folder in VS Code.
3. Open `index.html` in a browser.
4. Add a task and click Save Task.
5. Refresh the page and verify that task remains.

## Git Practice Commands

Run these commands from the project folder:

```bash
git init
git status
git add .
git commit -m "Initial commit - Student Task Tracker project"
```

After creating a GitHub repository, connect remote and push:

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

## Second Change Practice

Make a small change in `index.html` or `css/style.css`, then run:

```bash
git status
git add .
git commit -m "TestNG revision changes"
git push
```

## Screenshot Output Required

Student should send:

1. Screenshot of terminal after Git commands.
2. Screenshot of GitHub commit visible in repository.
3. Screenshot of project running in browser.
