/*!
 * @author electricessence / https://github.com/electricessence/
 */

declare module timsort
{
	declare export function sort(
		array:any,
		lo?:number,
		hi?:number):void;
	declare export function sort(
		array:any,
		compare:(a:any, b:any)=>number,
		lo?:number,
		hi?:number):void;
	declare export function sort(
		array:any,
		compare:any,
		lo?:number,
		hi?:number):void;
}

export = timsort;