import { RailsFile } from '../rails-file';
import { RailsWorkspace } from '../rails-workspace';
import { SwitchFile } from '../types';
import { pluralize } from 'inflected';
import * as path from 'path';

export async function grapeApiMaker(
  railsFile: RailsFile,
  workspace: RailsWorkspace
): Promise<SwitchFile[]> {
  return railsFile.possibleModelNames().map(possibleModelName => {
    const grapeApiName = pluralize(possibleModelName) + '.rb';

    if (railsFile.module) {
      return {
        checkedExists: false,
        filename: path.join(
          workspace.grapeApiPath,
          railsFile.module,
          grapeApiName
        ),
        title: 'Grape api ' + `${railsFile.module}/${grapeApiName}`,
        type: 'grapeApi',
      };
    }

    return {
      checkedExists: false,
      filename: path.join(
        workspace.grapeApiPath,
        grapeApiName
      ),
      title: 'Grape api ' + grapeApiName,
      type: 'grapeApi',
    };
  });
}
