import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UserTable = ({ users }) => {
    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Phone</Table.Column>
                            <Table.Column>Address</Table.Column>
                            <Table.Column>Product</Table.Column>
                            <Table.Column>Button</Table.Column>
                        </Table.Header>
                        <Table.Body>

                            {
                                users.map(user => <Table.Row key={user._id}>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.phone}</Table.Cell>
                                    <Table.Cell>{user.address}</Table.Cell>
                                    <Table.Cell>{user.product}</Table.Cell>
                                    <Table.Cell>
                                        <Link href={`users/${user._id}`}>
                                            <Button variant="outline">Details</Button>
                                        </Link>
                                        <Link href={`users/${user._id}`}>
                                            <Button variant="outline">Details</Button>
                                        </Link>
                                        <Link href={`users/${user._id}`}>
                                            <Button variant="danger">Delete</Button>
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>)
                            }

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default UserTable;