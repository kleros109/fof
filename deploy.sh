#!/bin/bash

# Quick deployment script for FOF Dashboard
# Usage: ./deploy.sh "commit message"

set -e

COMMIT_MSG="${1:-Update dashboard data}"

echo "🚀 Starting deployment process..."

# Check if there are any changes to commit
if git diff-index --quiet HEAD --; then
    echo "❌ No changes detected. Nothing to deploy."
    exit 0
fi

echo "📝 Staging changes..."
git add .

echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

echo "⬆️ Pushing to GitHub..."
git push

echo "✅ Deployment complete!"
echo "🌐 Vercel will automatically deploy your changes"
echo "📊 Your dashboard should be live in ~2 minutes at:"
echo "    https://fof-[your-deployment-url].vercel.app"

# Check git log to show the commit
echo ""
echo "📋 Latest commit:"
git log --oneline -1