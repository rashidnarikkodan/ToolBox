export const INITIAL_TOOLS = [
  // --- FREELANCE ---
  { id: 'f1', name: 'Fiverr', url: 'https://fiverr.com', category: 'Freelance', description: 'Find the perfect freelance services for your business.', icon: 'https://www.google.com/s2/favicons?domain=fiverr.com&sz=64', keywords: ['gig', 'outsourcing', 'design', 'dev', 'marketing'] },
  { id: 'f2', name: 'Upwork', url: 'https://upwork.com', category: 'Freelance', description: 'The world\'s work marketplace.', icon: 'https://www.google.com/s2/favicons?domain=upwork.com&sz=64', keywords: ['jobs', 'remote', 'talent', 'hiring', 'freelancer'] },
  { id: 'f3', name: 'Toptal', url: 'https://toptal.com', category: 'Freelance', description: 'Hire the top 3% of freelance talent.', icon: 'https://www.google.com/s2/favicons?domain=toptal.com&sz=64', keywords: ['elite', 'developers', 'finance', 'project management'] },
  { id: 'f4', name: 'Guru', url: 'https://guru.com', category: 'Freelance', description: 'Find and hire talented freelancers online.', icon: 'https://www.google.com/s2/favicons?domain=guru.com&sz=64', keywords: ['jobs', 'bid', 'flexible'] },
  { id: 'f5', name: 'Freelancer.com', url: 'https://freelancer.com', category: 'Freelance', description: 'The largest crowdsourcing marketplace.', icon: 'https://www.google.com/s2/favicons?domain=freelancer.com&sz=64', keywords: ['projects', 'contest', 'hiring'] },

  // --- JOBS ---
  { id: 'j1', name: 'LinkedIn', url: 'https://linkedin.com', category: 'Jobs', description: 'Manage your professional identity. Build and engage with your professional network.', icon: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=64', keywords: ['networking', 'career', 'recruitment', 'professional'] },
  { id: 'j2', name: 'Indeed', url: 'https://indeed.com', category: 'Jobs', description: 'Find jobs. Build a career. Hire talent.', icon: 'https://www.google.com/s2/favicons?domain=indeed.com&sz=64', keywords: ['search', 'employment', 'salary', 'resume'] },
  { id: 'j3', name: 'Wellfound', url: 'https://wellfound.com', category: 'Jobs', description: 'The place where startups and job seekers connect.', icon: 'https://www.google.com/s2/favicons?domain=wellfound.com&sz=64', keywords: ['startups', 'angel', 'equity', 'venture'] },
  { id: 'j4', name: 'Glassdoor', url: 'https://glassdoor.com', category: 'Jobs', description: 'Search jobs, read company reviews, and see salaries.', icon: 'https://www.google.com/s2/favicons?domain=glassdoor.com&sz=64', keywords: ['reviews', 'anonymous', 'salaries'] },
  { id: 'j5', name: 'Otta', url: 'https://otta.com', category: 'Jobs', description: 'Better way to find a job in tech.', icon: 'https://www.google.com/s2/favicons?domain=otta.com&sz=64', keywords: ['tech', 'relevant', 'matching'] },

  // --- CODING PRACTICE ---
  { id: 'cp1', name: 'LeetCode', url: 'https://leetcode.com', category: 'Coding Practice', description: 'Level up your coding skills and prepare for technical interviews.', icon: 'https://www.google.com/s2/favicons?domain=leetcode.com&sz=64', keywords: ['algorithms', 'data structures', 'interview', 'dsal'] },
  { id: 'cp2', name: 'Codeforces', url: 'https://codeforces.com', category: 'Coding Practice', description: 'A platform that hosts programming competitions.', icon: 'https://www.google.com/s2/favicons?domain=codeforces.com&sz=64', keywords: ['competitive', 'cp', 'contest', 'rating'] },
  { id: 'cp3', name: 'HackerRank', url: 'https://hackerrank.com', category: 'Coding Practice', description: 'Practice coding, prepare for interviews, and get hired.', icon: 'https://www.google.com/s2/favicons?domain=hackerrank.com&sz=64', keywords: ['certification', 'skills', 'hiring', 'test'] },
  { id: 'cp4', name: 'Exercism', url: 'https://exercism.org', category: 'Coding Practice', description: 'Code mentoring and practice for everyone.', icon: 'https://www.google.com/s2/favicons?domain=exercism.org&sz=64', keywords: ['mentorship', 'languages', 'free'] },
  { id: 'cp5', name: 'Codewars', url: 'https://codewars.com', category: 'Coding Practice', description: 'Train on kata in various programming languages.', icon: 'https://www.google.com/s2/favicons?domain=codewars.com&sz=64', keywords: ['kata', 'dojo', 'rank'] },

  // --- LEARNING ---
  { id: 'l1', name: 'MDN', url: 'https://developer.mozilla.org', category: 'Learning', description: 'Resources for developers, by developers.', icon: 'https://www.google.com/s2/favicons?domain=mozilla.org&sz=64', keywords: ['javascript', 'css', 'html', 'docs', 'web'] },
  { id: 'l2', name: 'freeCodeCamp', url: 'https://freecodecamp.org', category: 'Learning', description: 'Learn to code for free.', icon: 'https://www.google.com/s2/favicons?domain=freecodecamp.org&sz=64', keywords: ['course', 'curriculum', 'nonprofit', 'youtube'] },
  { id: 'l3', name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org', category: 'Learning', description: 'A computer science portal for geeks.', icon: 'https://www.google.com/s2/favicons?domain=geeksforgeeks.org&sz=64', keywords: ['articles', 'gate', 'cs', 'fundamentals'] },
  { id: 'l4', name: 'Udemy', url: 'https://udemy.com', category: 'Learning', description: 'Online courses from the world\'s largest selection.', icon: 'https://www.google.com/s2/favicons?domain=udemy.com&sz=64', keywords: ['courses', 'video', 'education'] },
  { id: 'l5', name: 'Coursera', url: 'https://coursera.org', category: 'Learning', description: 'Build skills with courses from top universities.', icon: 'https://www.google.com/s2/favicons?domain=coursera.org&sz=64', keywords: ['degrees', 'professional', 'specialization'] },

  // --- CONTENT ---
  { id: 'c1', name: 'Medium', url: 'https://medium.com', category: 'Content', description: 'A place to read, write, and connect with stories that matter.', icon: 'https://www.google.com/s2/favicons?domain=medium.com&sz=64', keywords: ['blogging', 'writing', 'stories', 'journalism'] },
  { id: 'c2', name: 'Dev.to', url: 'https://dev.to', category: 'Content', description: 'A constructive and inclusive social network for software developers.', icon: 'https://www.google.com/s2/favicons?domain=dev.to&sz=64', keywords: ['community', 'posts', 'tutorials', 'open source'] },
  { id: 'c3', name: 'Hashnode', url: 'https://hashnode.com', category: 'Content', description: 'The easiest way to start a developer blog.', icon: 'https://www.google.com/s2/favicons?domain=hashnode.com&sz=64', keywords: ['newsletter', 'domain', 'custom', 'writer'] },
  { id: 'c4', name: 'Substack', url: 'https://substack.com', category: 'Content', description: 'Independent publishing made simple.', icon: 'https://www.google.com/s2/favicons?domain=substack.com&sz=64', keywords: ['newsletter', 'subscription', 'email'] },

  // --- SOCIAL ---
  { id: 's1', name: 'X', url: 'https://x.com', category: 'Social', description: 'A real-time information network that connects you to the latest stories.', icon: 'https://www.google.com/s2/favicons?domain=x.com&sz=64', keywords: ['twitter', 'news', 'microblogging', 'trending'] },
  { id: 's2', name: 'Reddit', url: 'https://reddit.com', category: 'Social', description: 'The front page of the internet.', icon: 'https://www.google.com/s2/favicons?domain=reddit.com&sz=64', keywords: ['forums', 'subreddits', 'discussion', 'community'] },
  { id: 's3', name: 'Discord', url: 'https://discord.com', category: 'Social', description: 'The easiest way to talk over voice, video, and text.', icon: 'https://www.google.com/s2/favicons?domain=discord.com&sz=64', keywords: ['chat', 'servers', 'gaming', 'communities'] },
  { id: 's4', name: 'YouTube', url: 'https://youtube.com', category: 'Social', description: 'Enjoy the videos and music you love.', icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64', keywords: ['video', 'streaming', 'tutorials', 'vlogs'] },

  // --- DESIGN ---
  { id: 'd1', name: 'Figma', url: 'https://figma.com', category: 'Design', description: 'The collaborative interface design tool.', icon: 'https://www.google.com/s2/favicons?domain=figma.com&sz=64', keywords: ['ui', 'ux', 'prototyping', 'vector', 'collaboration'] },
  { id: 'd2', name: 'Dribbble', url: 'https://dribbble.com', category: 'Design', description: 'Show and tell for designers.', icon: 'https://www.google.com/s2/favicons?domain=dribbble.com&sz=64', keywords: ['portfolio', 'inspiration', 'creativity', 'shots'] },
  { id: 'd3', name: 'Canva', url: 'https://canva.com', category: 'Design', description: 'Graphic design platform for social media and presentations.', icon: 'https://www.google.com/s2/favicons?domain=canva.com&sz=64', keywords: ['graphics', 'templates', 'easy', 'editor'] },
  { id: 'd4', name: 'Behance', url: 'https://behance.net', category: 'Design', description: 'Showcase and discover the latest work from top online portfolios.', icon: 'https://www.google.com/s2/favicons?domain=behance.net&sz=64', keywords: ['portfolio', 'adobe', 'creative', 'gallery'] },
  { id: 'd5', name: 'Adobe Express', url: 'https://adobe.com/express', category: 'Design', description: 'Quickly and easily make standout content.', icon: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=64', keywords: ['social', 'branding', 'assets'] },

  // --- API TOOLS ---
  { id: 'api1', name: 'Postman', url: 'https://postman.com', category: 'API Tools', description: 'The collaboration platform for API development.', icon: 'https://www.google.com/s2/favicons?domain=postman.com&sz=64', keywords: ['rest', 'graphql', 'testing', 'endpoint'] },
  { id: 'api2', name: 'Insomnia', url: 'https://insomnia.rest', category: 'API Tools', description: 'The open-source desktop application that takes the pain out of interacting with HTTP APIs.', icon: 'https://www.google.com/s2/favicons?domain=insomnia.rest&sz=64', keywords: ['client', 'request', 'debug', 'http'] },
  { id: 'api3', name: 'RapidAPI', url: 'https://rapidapi.com', category: 'API Tools', description: 'Find, connect, and manage thousands of APIs.', icon: 'https://www.google.com/s2/favicons?domain=rapidapi.com&sz=64', keywords: ['marketplace', 'hub', 'gateway', 'connector'] },
  { id: 'api4', name: 'Swagger', url: 'https://swagger.io', category: 'API Tools', description: 'API Documentation & Design Tools for Teams.', icon: 'https://www.google.com/s2/favicons?domain=swagger.io&sz=64', keywords: ['openapi', 'docs', 'specification'] },

  // --- DATABASE ---
  { id: 'db1', name: 'MongoDB Compass', url: 'https://mongodb.com/products/compass', category: 'Database', description: 'The GUI for MongoDB.', icon: 'https://www.google.com/s2/favicons?domain=mongodb.com&sz=64', keywords: ['nosql', 'json', 'data', 'explorer'] },
  { id: 'db2', name: 'Supabase', url: 'https://supabase.com', category: 'Database', description: 'The open source Firebase alternative.', icon: 'https://www.google.com/s2/favicons?domain=supabase.com&sz=64', keywords: ['postgres', 'sql', 'auth', 'backend', 'realtime'] },
  { id: 'db3', name: 'Firebase', url: 'https://firebase.google.com', category: 'Database', description: 'Google\'s mobile and web app development platform.', icon: 'https://www.google.com/s2/favicons?domain=firebase.google.com&sz=64', keywords: ['hosting', 'analytics', 'push', 'notifications'] },
  { id: 'db4', name: 'PlanetScale', url: 'https://planetscale.com', category: 'Database', description: 'The world\'s most advanced serverless MySQL platform.', icon: 'https://www.google.com/s2/favicons?domain=planetscale.com&sz=64', keywords: ['mysql', 'vitess', 'scaling', 'database-as-a-service'] },
  { id: 'db5', name: 'Redis', url: 'https://redis.io', category: 'Database', description: 'The open source, in-memory data store.', icon: 'https://www.google.com/s2/favicons?domain=redis.io&sz=64', keywords: ['caching', 'nosql', 'key-value', 'performance'] },

  // --- DEV ENVIRONMENT ---
  { id: 'env1', name: 'VS Code', url: 'https://code.visualstudio.com', category: 'Dev Environment', description: 'Code editing. Redefined.', icon: 'https://www.google.com/s2/favicons?domain=visualstudio.com&sz=64', keywords: ['editor', 'ide', 'extensions', 'microsoft'] },
  { id: 'env2', name: 'Cursor', url: 'https://cursor.sh', category: 'Dev Environment', description: 'The AI-first code editor.', icon: 'https://www.google.com/s2/favicons?domain=cursor.sh&sz=64', keywords: ['ai', 'copilot', 'llm', 'coding-assistant'] },
  { id: 'env3', name: 'Alacritty', url: 'https://alacritty.org', category: 'Dev Environment', description: 'A cross-platform, GPU-accelerated terminal emulator.', icon: 'https://www.google.com/s2/favicons?domain=alacritty.org&sz=64', keywords: ['shell', 'rust', 'performance', 'console'] },
  { id: 'env4', name: 'Docker', url: 'https://docker.com', category: 'Dev Environment', description: 'Accelerate how you build, share, and run applications.', icon: 'https://www.google.com/s2/favicons?domain=docker.com&sz=64', keywords: ['containers', 'virtualization', 'devops', 'kubernetes'] },
  { id: 'env5', name: 'Hyper', url: 'https://hyper.is', category: 'Dev Environment', description: 'A terminal built on web technologies.', icon: 'https://www.google.com/s2/favicons?domain=hyper.is&sz=64', keywords: ['electron', 'terminal', 'plugin', 'styling'] },

  // --- DEPLOYMENT ---
  { id: 'dep1', name: 'Vercel', url: 'https://vercel.com', category: 'Deployment', description: 'Develop. Preview. Ship.', icon: 'https://www.google.com/s2/favicons?domain=vercel.com&sz=64', keywords: ['hosting', 'nextjs', 'react', 'edge'] },
  { id: 'dep2', name: 'Netlify', url: 'https://netlify.com', category: 'Deployment', description: 'The platform for modern web development.', icon: 'https://www.google.com/s2/favicons?domain=netlify.com&sz=64', keywords: ['jamstack', 'static', 'functions', 'serverless'] },
  { id: 'dep3', name: 'Railway', url: 'https://railway.app', category: 'Deployment', description: 'Bring your code, we\'ll handle the rest.', icon: 'https://www.google.com/s2/favicons?domain=railway.app&sz=64', keywords: ['paas', 'infra', 'cloud', 'deployment'] },
  { id: 'dep4', name: 'AWS', url: 'https://aws.amazon.com', category: 'Deployment', description: 'Comprehensive cloud computing platform by Amazon.', icon: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=64', keywords: ['cloud', 's3', 'ec2', 'lambda', 'server'] },
  { id: 'dep5', name: 'DigitalOcean', url: 'https://digitalocean.com', category: 'Deployment', description: 'Simplifying cloud computing for developers.', icon: 'https://www.google.com/s2/favicons?domain=digitalocean.com&sz=64', keywords: ['droplets', 'vps', 'app-platform'] },

  // --- BACKEND FRAMEWORKS ---
  { id: 'be1', name: 'Node.js', url: 'https://nodejs.org', category: 'Backend', description: 'JavaScript runtime built on Chrome\'s V8.', icon: 'https://www.google.com/s2/favicons?domain=nodejs.org&sz=64', keywords: ['express', 'server', 'javascript', 'runtime'] },
  { id: 'be2', name: 'Django', url: 'https://djangoproject.com', category: 'Backend', description: 'The web framework for perfectionists with deadlines.', icon: 'https://www.google.com/s2/favicons?domain=djangoproject.com&sz=64', keywords: ['python', 'mvc', 'orm', 'admin'] },
  { id: 'be3', name: 'Go', url: 'https://go.dev', category: 'Backend', description: 'Build simple, secure, and scalable systems with Go.', icon: 'https://www.google.com/s2/favicons?domain=go.dev&sz=64', keywords: ['golang', 'google', 'concurrency', 'systems'] },
  { id: 'be4', name: 'Laravel', url: 'https://laravel.com', category: 'Backend', description: 'The PHP framework for web artisans.', icon: 'https://www.google.com/s2/favicons?domain=laravel.com&sz=64', keywords: ['php', 'elegant', 'eloquent', 'blade'] },
  { id: 'be5', name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', category: 'Backend', description: 'Build anything with Spring Boot.', icon: 'https://www.google.com/s2/favicons?domain=spring.io&sz=64', keywords: ['java', 'enterprise', 'microservices'] },

  // --- MOBILE DEVELOPMENT ---
  { id: 'mob1', name: 'React Native', url: 'https://reactnative.dev', category: 'Mobile', description: 'Create native apps for Android and iOS using React.', icon: 'https://www.google.com/s2/favicons?domain=reactnative.dev&sz=64', keywords: ['ios', 'android', 'cross-platform', 'meta'] },
  { id: 'mob2', name: 'Flutter', url: 'https://flutter.dev', category: 'Mobile', description: 'Google\'s UI toolkit for building beautiful apps.', icon: 'https://www.google.com/s2/favicons?domain=flutter.dev&sz=64', keywords: ['dart', 'google', 'ui', 'widgets'] },
  { id: 'mob3', name: 'Expo', url: 'https://expo.dev', category: 'Mobile', description: 'Make any app. Run it everywhere.', icon: 'https://www.google.com/s2/favicons?domain=expo.dev&sz=64', keywords: ['react-native', 'universal', 'managed-workflow'] },
  { id: 'mob4', name: 'SwiftUI', url: 'https://developer.apple.com/xcode/swiftui', category: 'Mobile', description: 'Build better apps. Less code.', icon: 'https://www.google.com/s2/favicons?domain=apple.com&sz=64', keywords: ['apple', 'ios', 'swift', 'declarative'] },

  // --- SECURITY ---
  { id: 'sec1', name: 'Snyk', url: 'https://snyk.io', category: 'Security', description: 'Find and fix vulnerabilities in your code.', icon: 'https://www.google.com/s2/favicons?domain=snyk.io&sz=64', keywords: ['vulnerability', 'scanning', 'dependencies', 'devsecops'] },
  { id: 'sec2', name: 'Auth0', url: 'https://auth0.com', category: 'Security', description: 'Authentication and authorization platform.', icon: 'https://www.google.com/s2/favicons?domain=auth0.com&sz=64', keywords: ['login', 'identity', 'sso', 'jwt'] },
  { id: 'sec3', name: 'OWASP', url: 'https://owasp.org', category: 'Security', description: 'Open Source Foundation for Application Security.', icon: 'https://www.google.com/s2/favicons?domain=owasp.org&sz=64', keywords: ['standards', 'safety', 'top-10', 'best-practices'] },

  // --- UTILITIES ---
  { id: 'ut1', name: 'Carbon', url: 'https://carbon.now.sh', category: 'Utilities', description: 'Create and share beautiful images of your source code.', icon: 'https://www.google.com/s2/favicons?domain=carbon.now.sh&sz=64', keywords: ['screenshots', 'code-images', 'sharing'] },
  { id: 'ut2', name: 'Ray.so', url: 'https://ray.so', category: 'Utilities', description: 'Turn your code into beautiful images.', icon: 'https://www.google.com/s2/favicons?domain=ray.so&sz=64', keywords: ['raycast', 'aesthetic', 'sharing'] },
  { id: 'ut3', name: 'Regex101', url: 'https://regex101.com', category: 'Utilities', description: 'Online regex tester and debugger.', icon: 'https://www.google.com/s2/favicons?domain=regex101.com&sz=64', keywords: ['regular-expressions', 'testing', 'patterns'] },
  { id: 'ut4', name: 'JSON Formatter', url: 'https://jsonformatter.curiousconcept.com', category: 'Utilities', description: 'Validate and format JSON.', icon: 'https://www.google.com/s2/favicons?domain=jsonformatter.curiousconcept.com&sz=64', keywords: ['prettier', 'validation', 'json-viewer'] },

  // --- UI LIBRARIES ---
  { id: 'ui1', name: 'Tailwind CSS', url: 'https://tailwindcss.com', category: 'UI Libraries', description: 'A utility-first CSS framework.', icon: 'https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=64', keywords: ['styling', 'utility', 'design', 'components'] },
  { id: 'ui2', name: 'Material UI', url: 'https://mui.com', category: 'UI Libraries', description: 'React components for faster and easier web development.', icon: 'https://www.google.com/s2/favicons?domain=mui.com&sz=64', keywords: ['google', 'design-system', 'react-ui', 'blocks'] },
  { id: 'ui3', name: 'Chakra UI', url: 'https://chakra-ui.com', category: 'UI Libraries', description: 'Simple, modular and accessible UI components.', icon: 'https://www.google.com/s2/favicons?domain=chakra-ui.com&sz=64', keywords: ['accessible', 'modular', 'themeable', 'react'] },
  { id: 'ui4', name: 'Radix UI', url: 'https://radix-ui.com', category: 'UI Libraries', description: 'Unstyled, accessible components for building high‑quality design systems.', icon: 'https://www.google.com/s2/favicons?domain=radix-ui.com&sz=64', keywords: ['headless', 'primitive', 'accessible', 'react'] },

  // --- TESTING ---
  { id: 't1', name: 'Jest', url: 'https://jestjs.io', category: 'Testing', description: 'Delightful JavaScript Testing.', icon: 'https://www.google.com/s2/favicons?domain=jestjs.io&sz=64', keywords: ['unit-test', 'javascript', 'coverage', 'mocking'] },
  { id: 't2', name: 'Cypress', url: 'https://cypress.io', category: 'Testing', description: 'Fast, easy and reliable testing for anything that runs in a browser.', icon: 'https://www.google.com/s2/favicons?domain=cypress.io&sz=64', keywords: ['e2e', 'automation', 'browser', 'ui-test'] },
  { id: 't3', name: 'Playwright', url: 'https://playwright.dev', category: 'Testing', description: 'Fast and reliable end-to-end testing for modern web apps.', icon: 'https://www.google.com/s2/favicons?domain=playwright.dev&sz=64', keywords: ['microsoft', 'cross-browser', 'e2e', 'automation'] },
  { id: 't4', name: 'Vitest', url: 'https://vitest.dev', category: 'Testing', description: 'A blazing fast unit test framework powered by Vite.', icon: 'https://www.google.com/s2/favicons?domain=vitest.dev&sz=64', keywords: ['vite', 'fast', 'unit-test', 'compatible'] },

  // --- PACKAGES ---
  { id: 'pkg1', name: 'npm', url: 'https://npmjs.com', category: 'Packages', description: 'The world\'s largest software registry.', icon: 'https://www.google.com/s2/favicons?domain=npmjs.com&sz=64', keywords: ['modules', 'node', 'package', 'dependencies'] },
  { id: 'pkg2', name: 'pnpm', url: 'https://pnpm.io', category: 'Packages', description: 'Fast, disk space efficient package manager.', icon: 'https://www.google.com/s2/favicons?domain=pnpm.io&sz=64', keywords: ['fast', 'efficient', 'symlinks', 'lockfile'] },
  { id: 'pkg3', name: 'Yarn', url: 'https://yarnpkg.com', category: 'Packages', description: 'Fast, reliable, and secure dependency management.', icon: 'https://www.google.com/s2/favicons?domain=yarnpkg.com&sz=64', keywords: ['berry', 'meta', 'pnp', 'workspaces'] },

  // --- DEBUGGING ---
  { id: 'deb1', name: 'Stack Overflow', url: 'https://stackoverflow.com', category: 'Debugging', description: 'Where developers learn, share, and build careers.', icon: 'https://www.google.com/s2/favicons?domain=stackoverflow.com&sz=64', keywords: ['errors', 'solutions', 'questions', 'answers'] },
  { id: 'deb2', name: 'Chrome DevTools', url: 'https://developer.chrome.com/docs/devtools', category: 'Debugging', description: 'Web authoring and debugging tools built into Chrome.', icon: 'https://www.google.com/s2/favicons?domain=chrome.com&sz=64', keywords: ['inspect', 'console', 'network', 'performance'] },
  { id: 'deb3', name: 'Sentry', url: 'https://sentry.io', category: 'Debugging', description: 'Application monitoring and error tracking.', icon: 'https://www.google.com/s2/favicons?domain=sentry.io&sz=64', keywords: ['monitoring', 'logs', 'errors', 'tracking'] }
];
