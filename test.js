// testing

// staging --> git add
// committing --> git commit -m "<provide message>"
// push ---> remote (github) git push origin <branch-name>


// creating new branches
// main --> default branch
// git checkout -b <branch-name>

// (main) --> extending the main branch

// pull changes from remote
// git pull origin <branch-name>

// fetching branches
// git fetch origin <branch-name>

// stashing changes
// git stash
// git stash pop

// vscode test



// cherry-picking
// main --> development branch ---> two features are merged to main
// main ---> production branch (2 features to prod)
// need only 1 feature in production branch
// cherry-pick only 1 feature to production branch
// production --> users see this branch
// main --> production --> 2 features

// Reverting
// we commited 2 changes in main branch. --> wrong
// change is not correct
// revert the last commit