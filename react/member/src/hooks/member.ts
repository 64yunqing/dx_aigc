import { useState } from 'react';
import { getMembersCollection } from '../api/memberApi';
import { MemberEntity } from '../types/member';

export const useMemberCollection = () => {
    const [memberCollection, setMemberCollection] = 
        useState<MemberEntity[]>([]);
        
    const loadMemberCollection = async () => {
        // TODO: load data from api
        const members = await getMembersCollection();
        setMemberCollection(members)
    }
    return {
        memberCollection,
        loadMemberCollection
    }
}