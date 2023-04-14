package org.algorithm.array_hashstrings;

import org.junit.Test;

import java.util.function.BooleanSupplier;

import static org.junit.jupiter.api.Assertions.*;

class contain_duplicatesTest {

    @Test
    public void testContainsDuplicates() {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {1, 2, 3, 4, 5, 5};
        int[] arr3 = {1, 1, 2, 3, 4};

        assertFalse((BooleanSupplier) new contain_duplicates(arr1));
        assertTrue((BooleanSupplier) new contain_duplicates(arr2));
        assertTrue((BooleanSupplier) new contain_duplicates(arr3));
    }
}