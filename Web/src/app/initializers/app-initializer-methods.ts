import { AppConfigService } from './../../modules/shared/services/app-config/app-config.service';

export function configurationLoader(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}
