import { RailsFile } from '../rails-file';
import { RailsWorkspace } from '../rails-workspace';
import { SwitchFile } from '../types';
import { pluralize } from 'inflected';
import * as path from 'path';

export async function controllerTestMaker(
  railsFile: RailsFile,
  workspace: RailsWorkspace
): Promise<SwitchFile[]> {
  return railsFile.possibleModelNames().map(possibleModelName => {
    const controllerName = pluralize(possibleModelName) + '_controller_test.rb';

    return {
      checkedExists: false,
      filename: path.join(
        workspace.controllersTestPath,
        controllerName
      ),
      title: 'Controller test ' + controllerName,
      type: 'controllerTest',
    };
  });
}
