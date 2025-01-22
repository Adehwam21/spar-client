import { readFileSync, writeFileSync } from 'fs';
import latestVersion from 'latest-version';

async function updateDependencies() {
  try {
    // Read and parse package.json
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));

    // Update dependencies
    if (packageJson.dependencies) {
      for (const dep in packageJson.dependencies) {
        const latest = await latestVersion(dep);
        packageJson.dependencies[dep] = `^${latest}`;
        console.log(`Updated dependency: ${dep} -> ^${latest}`);
      }
    }

    // Update devDependencies
    if (packageJson.devDependencies) {
      for (const devDep in packageJson.devDependencies) {
        const latest = await latestVersion(devDep);
        packageJson.devDependencies[devDep] = `^${latest}`;
        console.log(`Updated devDependency: ${devDep} -> ^${latest}`);
      }
    }

    // Write updated package.json back to file
    writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    console.log('Dependencies updated to their latest stable versions.');

  } catch (error) {
    console.error('An error occurred while updating dependencies:', error.message);
  }
}

// Run the update process
updateDependencies();
