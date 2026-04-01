# Security Audit & Scrub Prompt

Copy and paste this into Claude Code to audit and clean any project before open-sourcing.

---

## The Prompt

```
Audit this entire codebase for exposed secrets, credentials, and sensitive data. Then fix everything and scrub git history clean.

## Step 1: Deep Scan

Search ALL files (source code, configs, docs, scripts, fixtures, tests, seed data, CI/CD files, dockerfiles, markdown) for:

- API keys, tokens, secrets (patterns: sk-, pk-, ghp_, gho_, xoxb-, xoxp-, AKIA, AIza, key-, token-, secret-, bearer, auth)
- Hardcoded URLs containing project identifiers (supabase, firebase, aws, azure, gcp, vercel, netlify, heroku, railway)
- Database connection strings with credentials (postgres://, mysql://, mongodb://, redis://)
- Email addresses that aren't generic examples (look for real @gmail, @outlook, @company domains)
- IP addresses (non-localhost, non-example)
- Private keys, certificates (.pem, .key contents, BEGIN PRIVATE KEY, BEGIN RSA)
- Webhook URLs with tokens/secrets embedded
- OAuth client IDs and secrets
- Base64-encoded strings that decode to secrets
- Hardcoded passwords or passphrases
- .env files that are tracked by git (check: git ls-files | grep -i env)
- Credential files tracked by git (credentials.json, service-account.json, keyfile, .npmrc with tokens, .pypirc)
- Anything in docker-compose or CI configs that should be an env var

Also check:
- .gitignore exists and properly excludes .env*, credentials, keys, and secrets
- No secrets in package.json, pyproject.toml, or other manifest scripts

## Step 2: Report

For each finding, report:
- File path and line number
- The type of secret (API key, URL, email, etc.)
- Severity (CRITICAL / HIGH / MEDIUM / LOW)
- The exact value to be replaced
- What to replace it with (env var, placeholder, etc.)

Ask me to confirm the replacement plan before proceeding.

## Step 3: Fix the Code

For each confirmed finding:
- Replace hardcoded values with environment variable references
- Add proper error handling when env vars are missing (throw, don't fallback to another hardcoded value)
- Update README/docs with the required env vars
- Update .gitignore if needed

## Step 4: Scrub Git History

After code fixes are done:
1. Install git-filter-repo if not present (brew install git-filter-repo / pip install git-filter-repo)
2. Build a replacements file mapping each real secret to its sanitized placeholder
3. Run: git filter-repo --replace-text <replacements-file> --force
4. Re-add the origin remote (filter-repo removes it)
5. Re-apply the code fixes from Step 3 (filter-repo resets working tree to rewritten history)
6. Verify with: git log --all -p | grep -c "<each-secret>" — every count must be 0
7. Verify working tree is also clean

## Step 5: Final Verification

- Grep the entire working tree for every secret found in Step 1
- Grep the full git history for every secret
- Confirm zero matches across both
- Remind me to force-push: git push origin <branch> --force
- Remind me to rotate any credentials that were exposed (they may have been cloned/cached already)
```
