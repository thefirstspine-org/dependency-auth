import axios from "axios";
import { MeResponse } from "./me-response.interface";

/**
 * Service to interact with the auth net service.
 */
export class AuthService {

  private cachedMeResponses: {[key: string]: MeResponse} = {};

  /**
   * Default Auth net service URL.
   */
  static readonly AUTH_URL_DEFAULT: string = 'https://auth.thefirstspine.fr'

  /**
   * Validates a JWT to the auth platform service.
   * @param jwt The JWT to send to the auth net service
   */
  async me(jwt: string): Promise<number|null> {
    // Get cached response
    if (this.cachedMeResponses[jwt] != undefined && (new Date()).getTime() < this.cachedMeResponses[jwt].expires) {
      return this.cachedMeResponses[jwt].user_id;
    }

    // Check the bearer JSON token
    try {
      const response = await axios.get(this.getAuthNetServiceUrl() + '/api/v3/me', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const jsonResponse = response.data;
      if (!jsonResponse.user_id) {
        return null;
      }

      // Cache the response
      this.cachedMeResponses[jwt] = {
        expires: (new Date()).getTime() + (60 * 1000), // one minute
        user_id: jsonResponse.user_id,
      };
  
      // Return the user ID
      return jsonResponse.user_id;
    } catch(e) {
      console.log({ errorFromAxios: e });
      return null;
    }

    return null;
  }

  /**
   * Get the auth net service URL according to the AUTH_URL environment variable.
   */
  public getAuthNetServiceUrl(): string {
    return process.env?.AUTH_URL?.length > 0 ? process.env.AUTH_URL : AuthService.AUTH_URL_DEFAULT;
  }

}

export default new AuthService();
