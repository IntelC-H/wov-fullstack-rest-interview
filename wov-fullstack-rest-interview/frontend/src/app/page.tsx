"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Track {
    id: number;
    name: string;
    price: number;
    duration: number;
    genre: string;
}

export default function Home() {

    const [tracks, setTracks] = useState<Track[]>([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetchTracks(page);
    }, [page]);

    const fetchTracks = async (page: number) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/tracks?page=${page}&pageSize=10`
        );
        const data: Track[] = await response.json();
        setTracks((prev) => [...prev, ...data]);
    };
    return (
        <main className={styles.main}>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
            <h1 className="text-2xl font-bold mb-6">Track List</h1>

            <div className="w-full max-w-4xl border-y-8">
                <Table className="table-auto w-full border-collapse">
                    <TableHeader>
                        <TableRow>
                            {["ID", "Name", "Price ($)", "Duration (s)", "Genre"].map((header, index) => (
                                <TableHead
                                    key={index}
                                    className={`px-4 py-2 ${
                                        index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                                  }`}
                                >
                                    {header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tracks.map((track, rowIndex) => (
                            <TableRow
                                key={track.id}
                                className={`${
                                    rowIndex % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                                }`}
                            >
                                {Object.values(track).map((value, colIndex) => (
                                    <TableCell
                                        key={colIndex}
                                        className={`px-4 py-2 ${
                                            colIndex % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                                        }`}
                                    >
                                        {typeof value === "number" && colIndex === 2
                                            ? value.toFixed(2)
                                            : value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <button
                onClick={() => setPage(page + 1)}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
                Load More
            </button>
        </main>
    )
}
