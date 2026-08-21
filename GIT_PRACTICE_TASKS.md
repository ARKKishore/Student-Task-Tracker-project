# Git Practical Task Sheet for Rajani

## Task 1: Open Project

- Extract the ZIP file.
- Open the project folder in VS Code.
- Open `index.html` in browser.
- Add one task and save it.
- Refresh browser and check if task remains.

## Task 2: Initialize Git

Run:

```bash
git init
git status
```

Question: What does `git status` show?

## Task 3: First Commit

Run:

```bash
git add .
git status
git commit -m "Initial commit - Student Task Tracker project"
```

Question: What is the difference between `git add` and `git commit`?

## Task 4: Push to GitHub

Create one empty GitHub repository. Then run:

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

Output required:

- Screenshot of terminal output.
- Screenshot of GitHub repository showing files.

## Task 5: Make a Second Change

Change this line in `index.html`:

```html
<p>Small Git practice web project using HTML, CSS, JavaScript and browser localStorage.</p>
```

Change it to:

```html
<p>Small Git practice project for learning local and remote repository workflow.</p>
```

Then run:

```bash
git status
git add .
git commit -m "TestNG revision changes"
git push
```

Output required:

- Screenshot of terminal command output.
- Screenshot of GitHub latest commit.

## Task 6: Explain in Your Own Words

Write answers:

1. What is local repository?
2. What is remote repository?
3. What is `git status`?
4. What is `git add .`?
5. What is `git commit`?
6. What is `git push`?
7. What is `git pull`?
8. Why do we use `.gitignore`?
