status: lint
	git status

install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

brain-games:
	node bin/brain-games.js