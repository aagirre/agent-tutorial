# Todo App

A simple, accessible Todo application with dark mode support.

## How to Create a Draft Pull Request on GitHub

A **draft pull request** signals that the work is still in progress and is not yet ready for review or merge.

### Option 1: Via the GitHub Web UI

1. Navigate to the repository on GitHub.
2. Click the **Pull requests** tab, then click **New pull request**.
3. Select the base and compare branches.
4. Instead of clicking **Create pull request**, click the **dropdown arrow** next to the button.
5. Select **Create draft pull request**.
6. Fill in the title and description, then click **Create draft pull request** to confirm.

### Option 2: Via the GitHub CLI

```bash
# Create a draft pull request
gh pr create --draft

# Create a draft pull request with a title and body
gh pr create --draft --title "My work in progress" --body "Still working on this."
```

### Converting a Draft to Ready for Review

Once your work is complete, open the pull request on GitHub and click **Ready for review** at the bottom of the page. This allows reviewers to start their review and enables the PR to be merged.

---

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
