import { toast } from 'sonner';
import { IAdditionalQueryParamsForAPI } from 'types';

import { ChainlitAPI, ClientError } from '@chainlit/react-client';

export function makeApiClient(
  chainlitServer: string,
  additionalQueryParams: IAdditionalQueryParamsForAPI
) {
  const httpEndpoint = chainlitServer;

  const on401 = () => {
    toast.error('Unauthorized');
  };

  const onError = (error: ClientError) => {
    toast.error(error.toString());
  };

  return new ChainlitAPI(
    httpEndpoint,
    'copilot',
    additionalQueryParams as Record<string, string>,
    on401,
    onError
  );
}
