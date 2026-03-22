# Todo App

A simple, accessible Todo application with dark mode support.

## How to Accept (Merge) a Pull Request on GitHub

Follow these steps to accept and merge a pull request:

### Option 1: Via the GitHub Web UI

1. Navigate to the repository on GitHub.
2. Click the **Pull requests** tab.
3. Select the pull request you want to merge.
4. Review the changes in the **Files changed** tab.
5. If the PR is a **draft**, the author must first mark it as "Ready for review" before it can be merged.
6. Once ready, click **Merge pull request** (or choose **Squash and merge** / **Rebase and merge** from the dropdown).
7. Confirm by clicking **Confirm merge**.
8. Optionally, click **Delete branch** to clean up the feature branch.

### Option 2: Via the GitHub CLI

```bash
# List open pull requests
gh pr list

# Review a pull request
gh pr view <PR_NUMBER>

# Merge a pull request
gh pr merge <PR_NUMBER>

# Merge with squash
gh pr merge <PR_NUMBER> --squash

# Merge with rebase
gh pr merge <PR_NUMBER> --rebase
```

### Tips

- A PR marked as **Draft** cannot be merged until it is marked as "Ready for review".
- If branch protection rules require reviews, ensure the required approvals are in place before merging.
- If there are merge conflicts, resolve them locally or via the GitHub web editor before merging.

## Running the App

Open `index.html` in a browser — no build step required.
