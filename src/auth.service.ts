import fetch, { Response } from 'node-fetch';

/**
 * Service to interact with the auth net service.
 */
class AuthService {

  /**
   * Default Auth net service URL.
   */
  static readonly AUTH_URL_DEFAULT: string = 'https://auth.thefirstspine.fr'

  /**
   * Validates a JWT to the auth platform service.
   * @param jwt The JWT to send to the auth net service
   */
  async me(jwt: string): Promise<number|null> {
    // Check the bearer JSON token
    const response: Response = await fetch(this.getAuthNetSeviceUrl() + '/api/me', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const jsonResponse = await response.json();
    if (!jsonResponse.user_id) {
      return null;
    }

    // Return the user ID
    return jsonResponse.user_id;
  }

  /**
   * Get the auth net service URL according to the AUTH_URL environment variable.
   */
  public getAuthNetSeviceUrl(): string {
    return process.env?.AUTH_URL?.length > 0 ? process.env.AUTH_URL : AuthService.AUTH_URL_DEFAULT;
  }

}

export default new AuthService();
