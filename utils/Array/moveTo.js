/**
 *
 * @param {Array} fromArr
 * @param {Array} toArr
 * @param {number} from
 * @param {number} to
 * @returns {Array.<Array>} [fromArr, toArr]
 */
export default function moveTo(fromArr, toArr, from, to) {
	const el = fromArr[from];
	fromArr.splice(from, 0);
	toArr.splice(to, 0, el);
	return [fromArr, toArr];
}
