#!/bin/bash

# Colors for better readability
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored messages
print_message() {
    echo -e "${2}${1}${NC}"
}

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_message "Error: Not in a git repository!" "$RED"
    exit 1
fi

# Show current status
print_message "\n📁 Current git status:" "$BLUE"
git status --short

# Ask for commit message
print_message "\n📝 Enter commit message:" "$YELLOW"
read -r commit_message

# Check if message is empty
if [ -z "$commit_message" ]; then
    print_message "Error: Commit message cannot be empty!" "$RED"
    exit 1
fi

# Ask whether to push
print_message "\n🚀 Do you want to push to remote? (y/n):" "$YELLOW"
read -r should_push

# Add all changes
print_message "\n📦 Adding changes..." "$BLUE"
git add .

# Commit with message
print_message "💾 Committing changes..." "$BLUE"
if git commit -m "$commit_message"; then
    print_message "✓ Commit successful!" "$GREEN"
else
    print_message "✗ Commit failed!" "$RED"
    exit 1
fi

# Push if user wants to
if [ "$should_push" = "y" ] || [ "$should_push" = "Y" ] || [ "$should_push" = "yes" ]; then
    print_message "\n📤 Pushing to remote..." "$BLUE"
    
    # Get current branch name
    current_branch=$(git branch --show-current)
    
    if git push origin "$current_branch"; then
        print_message "✓ Push successful!" "$GREEN"
    else
        print_message "✗ Push failed!" "$RED"
        exit 1
    fi
else
    print_message "\n💡 Skipping push. Changes are committed locally only." "$YELLOW"
fi

# Show final status
print_message "\n✅ All done! Final status:" "$GREEN"
git log -1 --oneline