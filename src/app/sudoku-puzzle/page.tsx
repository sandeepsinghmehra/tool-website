import Sudoku from "@/components/sudoku/SudokuPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sudoku Puzzle Generator",
  description: `Generate unique Sudoku puzzles online instantly with ease. Customize difficulty and print your puzzles for endless fun!`,
  keywords: ["sudoku puzzle printable", "hardest sudoku puzzle", "simple sudoku puzzle", "sudoku puzzle with answer", "sudoku puzzle with answer key", "how to solve the sudoku puzzle", "solve sudoku puzzle", "easy sudoku puzzle with answer", "sudoku puzzle online"],
};



function SudokuPuzzlePage() {
  
  return (
    <main>
        <Sudoku />
    </main>
  );
}
export default SudokuPuzzlePage;