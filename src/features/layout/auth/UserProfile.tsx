import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import React from 'react';
import Link from 'next/link';
import { User2 } from 'lucide-react';
import { DropdownMenuItemLogout } from './LogoutButton';


export const UserProfile = async () => {
    const session = await getAuthSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button size="sm" variant="outline">
                    {session?.user.name ?? ""}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild> 
                    <Link href="/profile" >
                    <User2 className="mr-2 h-4 w-4" />
                    Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItemLogout />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}