import Image from "next/image";

export default function UserReplies(){
    return(
        <div>
            <div>
                <button><Image alt="" src="/icon-plus.svg" width={11} height={11}/></button>
                <p>0</p>
                <button><Image alt="" src="/icon-minus.svg" width={11} height={11}/></button>
            </div>

            <div>
                <div>
                    <div>
                        <Image alt="" src="" width={40} height={40}/>
                        <p>Username</p>
                        <p></p>
                    </div>

                    <div>
                        <button> <Image alt="delete" src="/icon-delete.svg" width={12} height={14}/>Delete</button>
                        <button> <Image alt="edit" src="/icon-edit.svg" width={14} height={14}/>edit</button>
                    </div>

                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}