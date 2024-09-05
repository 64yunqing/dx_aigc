import { useEffect } from 'react';
import type { MemberEntity } from '../types/member';
import { useMemberCollection } from '../hooks/member'

const MemberEntity = () => {
    // hooks 思想  组件纯UI  
    const { memberCollection, loadMemberCollection } = 
        useMemberCollection()
    // onMounted
    // onUpdated
    // onUnmounted 
    useEffect(() => {
        loadMemberCollection();
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                <tbody>
                    {
                        memberCollection.map((member: MemberEntity) => (
                            <tr key={member.id}>
                                <td>{member.avatar_url}</td>
                                <td>{member.login}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </thead>
        </table>
    )
}
export default MemberEntity