import { AppMountParameters, CoreSetup, CoreStart, Plugin } from 'kibana/public';
import { AppPluginStartDependencies } from './types';

export type WazuhSetupDeps = {}
export type WazuhStartDeps = {}

export type WazuhSetup = {}
export type WazuhStart = {}

export class WazuhPlugin implements Plugin<WazuhSetup, WazuhStart, WazuhSetupDeps, WazuhStartDeps> {

  public setup(core: CoreSetup, plugins: WazuhStartDeps): WazuhSetup {
    core.application.register({
      id: `wazuh`,
      title: 'Wazuh',
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params);
      }
    })
    return {};
  }

  public start(core: CoreStart, plugins: WazuhStartDeps): WazuhStart {
    return {};
  }
}