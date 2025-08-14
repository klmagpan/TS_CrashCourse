export class Invoker{ // Stimpuate "ICommand" in order to be a valid type
    executeCommand<Type extends ICommand>(command: Type){
        command.execute();
    }
}