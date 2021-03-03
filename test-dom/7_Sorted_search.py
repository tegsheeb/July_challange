'''
7. Sorted Search

Implement function count_numbers that accepts a sorted list of unique integers and, 
efficiently with respect to time used, counts the number of list elements that are less than the parameter less_than.

For example, count_numbers([1, 3, 5, 7], 4) should return 2 because there are two list elements less than 4.
'''


def count_numbers(sorted_list, less_than):
    if sorted_list[-1] < less_than:
        return len(sorted_list)
    
    start = 0
    end = len(sorted_list) - 1


    while start <= end:
        mid = (start + end)// 2
        if sorted_list[mid] == less_than:
            return mid

        if sorted_list[mid] < less_than:
            if mid < len(sorted_list) - 1 and less_than <= sorted_list[mid + 1]:
                return mid + 1
            else: 
                start = mid + 1
        
        if sorted_list[mid] > less_than:
            if mid >= 1 and less_than > sorted_list[mid - 1]:
                return mid
            else:
                end = mid - 1
    

if __name__ == "__main__":
    sorted_list = [1, 3, 5, 7]
    print(count_numbers(sorted_list, 4)) # should print 2