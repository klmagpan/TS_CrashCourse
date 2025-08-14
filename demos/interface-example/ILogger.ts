export interface ILogger{ // Export, make useable by other files
	title: string;
	
	LogEvent(eventTitle: string, eventData: string, moment: number);
	LogError(message: string, errorData: string, locals: string[], moment: number);
}