import { Location } from './location.model';
import { Review } from './review.model';
import { Unit } from './unit.model';
import { Rental } from './rental.model';

/**
 * Represents the _Lodging_ model
 *
 * ```yaml
 * id: string;
 * location: Location;
 * name: string;
 * reviews: Review[];
 * units: Unit[];
 * ```
 */
export interface Lodging {
  id: string;
  location: Location;
  name: string;
  reviews: Review[];
  rentals: Rental[];
}
