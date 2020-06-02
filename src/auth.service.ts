/**
 * Service to interact with the auth net service.
 */
export class AuthService {

  /**
   * Default Auth net service URL.
   */
  static readonly AUTH_URL_DEFAULT: string = 'https://auth.thefirstspine.fr'

  /**
   * Validates a JWT to the auth platform service.
   * @param jwt The JWT to send to the auth net service
   */
  async login(jwt: string): Promise<number|null> {
    // Check the bearer JSON token
    const response: Response = await fetch(process.env.AUTH_URL + '/api/me', {
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
    return process.env.AUTH_URL ? process.env.AUTH_URL : AuthService.AUTH_URL_DEFAULT;
  }

}
