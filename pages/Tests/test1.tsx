import react , {useState, useEffect} from react;

export default function FriendsStatus(props : any) {
//states up!
//boolean variables states etc often use the is keyword in the beginning!
const [isOnline, setIsOnline] = useState<boolean>(null); //we often use null to initialize a state!


useEffect(() => {
    //mesa sthn useEffect() bazoume genika function cause thats why it iss created 
    //eidika gia async functions! panta omws thn callback ths idias ths useEffect()
    //thn afhnoume anephreasth!!!
    function handleStatusChange(status :boolean) {

    }
});
}