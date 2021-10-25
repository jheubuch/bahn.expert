/* tslint:disable */
/* eslint-disable */
/**
 * RIS :: Stations
 * ## Info * member of the **[RIS-API](https://db.de/ris-api)** family * powered by [DB Systel BusinessHub - doServices](https://user-portal.hub.ose.db.de/) * powered by [T.R Reisendeninformation](https://db-planet.deutschebahn.com/pages/reisendeninformation/apps/content/willkommen) * implements model: *1.0.201-SNAPSHOT*  ## Capabilities  ### Stations *stay tuned*  ### Travel Centers *stay tuned*  ### Stop Places Information on a huge amount of stop-places [Haltestellen] coming from different source like EFZ [Europäisches Fahrplanzentrum] and DB Station & Service. The service offers therefore all stop-place that are part or that were part of the official sales time table for germany including foreign stop-places for transpors driving into germany / leaving germany and connecting journeys in foreign countries that are part of the railteam alliance. OEPNV stop-places are returned as well.  Brief information for particular stop-place like * language dependent short, long, speech and symbol names from different sources [EFZ or BHW] * metropolis information [Metropole] * parent station [Bahnhof] * geo coordinates, country and timezone * transport types [Verkehrsmittel / Produkart] that depart / arrive * foreign key mappings [Fremdschluessel] like EVA, RL100 / DS100, EPA, IBNR, DHID / IFOPT, STADA and UIC * validity ranges [Gueltigkeitsbereiche]  Different query options for stop-places like * by name query with fuzzy-search [fehlertolerante Suche] and order by relevance [gewichtete Suche] * by geo-coordinate and radius ordered by distance * by foreign key  Multiple groups a stop-place may belong to like * Station [selber Bahnhof] * Sales [vertrieblicher Umsteigebereich inkl. OEPNV]  * Metropolitan Area [Stadtgebiet]  ### Platforms General information on platforms [Gleise, Bussteige, Plattformen etc.] for a particular stop-place like: * name, start and end in meters, linked platforms [selber Bahnsteig], parent platform [fuer Teilgleise]  * sectors with name, start and end in meters, cube position [Wuerfelposition] and information ob cube signage [Beschilderung] * accessibility information [Barrierefreier Zugang] like audible signals, automatic doors, stair markings and a lot more * informaton on operational platforms [Betriebsgleise], optics [Optiken], reference points [Refeenzpunkte] and orientations [Orientierung gemaess Nullpunkt]  ### Connecting-Times Connecting-times [Umsteigezeiten / Anschlusszeiten] for a stop-place [Haltestelle] and all members of stop-place group [Umsteigebereich] including foreign stop-places [Auslandshalte gemaess Railteam-Flag etc.]: * for different kind of stop-place groups    * Station [selber Bahnhof]   * Sales [vertrieblicher Umsteigebereich inkl. OEPNV]   * All [alle Umsteigebereiche] supported * and different personae, if available   * Occasional Traveller [Gelegenheitsreisender]   * Frequent Traveller [Pendler]   * Handicapped Traveller [Mobilitaetseingeschraenkter Reisender] * from various sources   * RIL420 [Konzernrichtlinie]   * EFZ [Europäisches Fahrplanzentrum inkl. OEPNV & Auslandshalte]   * IndoorRouting [Indoor Routing RIS-Maps] available  ## Limitations * *[backlog]* support active and inactive versions of stop-places/stations (differing date ranges) * *[backlog]* support foreign keys EPA & IBNR * *[backlog]* raise stop-place change events with RIS::Events in case stop-place data changes * *[backlog]* enable query of all stop-places that have been changed since a certain datetime * *[backlog]* include Station & Service Bahnhofswissen with it\'s fully functional API starting from ~Q1/Q2 2021  ## Getting Started * get to know the vision behind [RIS-API](https://db.de/ris-api) * visit our [Coding Dojo](https://ris.gitpages.tech.rz.db.de/risapi/documentation/) and learn how to get started  ## Licenses * The usage of the station data of DB Station & Services is subject to the Creative Commons Attribution 4.0 International (CC BY 4.0) license
 *
 * The version of the OpenAPI document: 1.0
 * Contact: BusinessHub.doServices.Titan.Team@deutschebahn.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from './configuration';
import { RequiredError, RequestArgs } from './base';
import { AxiosInstance } from 'axios';

/**
 *
 * @export
 */
export const DUMMY_BASE_URL = 'https://example.com';

/**
 *
 * @throws {RequiredError}
 * @export
 */
export const assertParamExists = function (
  functionName: string,
  paramName: string,
  paramValue: unknown,
) {
  if (paramValue === null || paramValue === undefined) {
    throw new RequiredError(
      paramName,
      `Required parameter ${paramName} was null or undefined when calling ${functionName}.`,
    );
  }
};

/**
 *
 * @export
 */
export const setApiKeyToObject = async function (
  object: any,
  keyParamName: string,
  configuration?: Configuration,
) {
  if (configuration && configuration.apiKey) {
    const localVarApiKeyValue =
      typeof configuration.apiKey === 'function'
        ? await configuration.apiKey(keyParamName)
        : await configuration.apiKey;
    object[keyParamName] = localVarApiKeyValue;
  }
};

/**
 *
 * @export
 */
export const setBasicAuthToObject = function (
  object: any,
  configuration?: Configuration,
) {
  if (configuration && (configuration.username || configuration.password)) {
    object['auth'] = {
      username: configuration.username,
      password: configuration.password,
    };
  }
};

/**
 *
 * @export
 */
export const setBearerAuthToObject = async function (
  object: any,
  configuration?: Configuration,
) {
  if (configuration && configuration.accessToken) {
    const accessToken =
      typeof configuration.accessToken === 'function'
        ? await configuration.accessToken()
        : await configuration.accessToken;
    object['Authorization'] = 'Bearer ' + accessToken;
  }
};

/**
 *
 * @export
 */
export const setOAuthToObject = async function (
  object: any,
  name: string,
  scopes: string[],
  configuration?: Configuration,
) {
  if (configuration && configuration.accessToken) {
    const localVarAccessTokenValue =
      typeof configuration.accessToken === 'function'
        ? await configuration.accessToken(name, scopes)
        : await configuration.accessToken;
    object['Authorization'] = 'Bearer ' + localVarAccessTokenValue;
  }
};

/**
 *
 * @export
 */
export const setSearchParams = function (url: URL, ...objects: any[]) {
  const searchParams = new URLSearchParams(url.search);
  for (const object of objects) {
    for (const key in object) {
      if (Array.isArray(object[key])) {
        searchParams.delete(key);
        for (const item of object[key]) {
          searchParams.append(key, item);
        }
      } else {
        searchParams.set(key, object[key]);
      }
    }
  }
  url.search = searchParams.toString();
};

/**
 *
 * @export
 */
export const serializeDataIfNeeded = function (
  value: any,
  requestOptions: any,
  configuration?: Configuration,
) {
  const nonString = typeof value !== 'string';
  const needsSerialization =
    nonString && configuration && configuration.isJsonMime
      ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
      : nonString;
  return needsSerialization
    ? JSON.stringify(value !== undefined ? value : {})
    : value || '';
};

/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
  return url.pathname + url.search + url.hash;
};

/**
 *
 * @export
 */
export const createRequestFunction = function <T>(
  axiosArgs: RequestArgs,
  globalAxios: AxiosInstance,
  BASE_PATH: string,
  configuration?: Configuration,
) {
  return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
    const axiosRequestArgs = {
      ...axiosArgs.options,
      url: (configuration?.basePath || basePath) + axiosArgs.url,
    };
    return axios.request<T>(axiosRequestArgs);
  };
};